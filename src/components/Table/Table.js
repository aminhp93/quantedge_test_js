import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import NumberFormat from 'react-number-format';

import './Table.css';
import { getRandom, companies_list } from '../companies_list';


class TableExampleSimple extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      companies_list: companies_list
    }
  }
  
  render(){
    return (
       <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}> 
          <TableRow>
            <TableHeaderColumn>Code</TableHeaderColumn>
            <TableHeaderColumn>Company</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Value</TableHeaderColumn>
            <TableHeaderColumn>Change</TableHeaderColumn>
            <TableHeaderColumn>%Change</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {
              this.state.companies_list.map((item) => (
                <TableRow key={item.id}>
                  <TableRowColumn className={'code'}>{item.code}</TableRowColumn>
                  <TableRowColumn className={'company'}>{item.name}</TableRowColumn>
                  <TableRowColumn>
                    <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </TableRowColumn>
                  <TableRowColumn>
                    <NumberFormat value={item.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </TableRowColumn>
                  <TableRowColumn 
                    className={item.change > 0 ? 'changeUp' : 'changeDown'}
                  >
                    {item.change || 0}
                  </TableRowColumn>
                  <TableRowColumn
                    className={item.change > 0 ? 'changeUp' : 'changeDown'}
                  >
                    {item.percentChange || 0}%
                  </TableRowColumn>
                </TableRow>
              ))
            }
        </TableBody>
      </Table>
    )
  }

  componentDidMount(){

    setInterval(() => {
      this.state.companies_list.map((item) => {
        var old_price = parseInt(item.price)

        item.percentChange = getRandom(-5, 5).toFixed(2)

        var diff = old_price * item.percentChange / 100

        var new_price = old_price + diff
  
        var new_volume = Math.round(parseInt(item.volume)) + Math.round(getRandom(10, 30))

        // New value, price, change
        item.value = Math.floor(new_volume * new_price)
        item.price = new_price.toFixed(2)
        item.change = diff.toFixed(2)
        
        // Result based on tabs TOP_GAINERS, TOP_LOSERS
        if (this.props.filter === 'top_gainers'){
          return this.setState({
            companies_list: companies_list.sort(function (a, b) {
              return b.value - a.value;
            }).slice(0, 20)
          })
        } else if (this.props.filter === 'top_losers'){
          return this.setState({
            companies_list: companies_list.sort(function (a, b) {
              return a.value - b.value;
            }).slice(0, 20)
          })
        } else {
          return this.setState({
            companies_list: companies_list.sort(function (a, b) {
              return a.id - b.id;
            })
          })
        }
      })
    }, 5000) 
  }
 
}

export default TableExampleSimple;