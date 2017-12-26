export const companies_list = [
    {
      code: 'CBA.AX',
      name: 'COMMONWEALTH BANK OF AUSTRALIA'
    },
    {
      code: 'SRX.AX',
      name: 'SIRTEX MEDICAL LIMITED'
    },
    {
      code: 'ANZ.AX',
      name: 'AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED'
    },
    {
      code: 'BHP.AX',
      name: 'BHP BILLITON LIMITED'
    },
    {
      code: 'WBC.AX',
      name: 'WESTPAC BANKING CORPORATION'
    },
    {
      code: 'NAB.AX',
      name: 'NATIONAL AUSTRALIA BANK LIMITED'
    },
    {
      code: 'MQG.AX',
      name: 'MACQUARIE GROUP LIMITED'
    },
    {
      code: 'QBE.AX',
      name: 'QBE INSURANCE GROUP LIMITED'
    },
    {
      code: 'RIO.AX',
      name: 'RIO TINTO LIMITED'
    },
    {
      code: 'WES.AX',
      name: 'WESFARMERS LIMITED'
    },
    {
      code: 'CSL.AX',
      name: 'CSL LIMITED'
    },
    {
      code: 'FMG.AX',
      name: 'FORTESCUE METALS GROUP LTD'
    },
    {
      code: 'FMG.AX',
      name: 'FORTESCUE METALS GROUP LTD'
    },
	{
      code: 'TLS.AX',
      name: 'TELSTRA CORPORATION LIMITED'
    },
	{
      code: 'CWN.AX',
      name: 'CROWN RESORTS LIMITED'
    }
 ]

export function getRandom(min, max){
  return (Math.random() * (max - min) + min)
}

var i;
for (i = 0; i < companies_list.length; i++){
  companies_list[i].id = i
  companies_list[i].price = getRandom(0, 100).toFixed(2)
  companies_list[i].volume = Math.floor(getRandom(1000, 1000000))
  companies_list[i].value = Math.floor((companies_list[i].volume) * (companies_list[i].price))
}
