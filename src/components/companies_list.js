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
    },
    {
      code: 'CBA.AX2',
      name: 'COMMONWEALTH BANK OF AUSTRALIA2'
    },
    {
      code: 'SRX.AX2',
      name: 'SIRTEX MEDICAL LIMITED2'
    },
    {
      code: 'ANZ.AX2',
      name: 'AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED2'
    },
    {
      code: 'BHP.AX2',
      name: 'BHP BILLITON LIMITED2'
    },
    {
      code: 'WBC.AX2',
      name: 'WESTPAC BANKING CORPORATION2'
    },
    {
      code: 'NAB.AX2',
      name: 'NATIONAL AUSTRALIA BANK LIMITED2'
    },
    {
      code: 'MQG.AX2',
      name: 'MACQUARIE GROUP LIMITED2'
    },
    {
      code: 'QBE.AX2',
      name: 'QBE INSURANCE GROUP LIMITED2'
    },
    {
      code: 'RIO.AX2',
      name: 'RIO TINTO LIMITED2'
    },
    {
      code: 'WES.AX2',
      name: 'WESFARMERS LIMITED2'
    },
    {
      code: 'CSL.AX2',
      name: 'CSL LIMITED2'
    },
    {
      code: 'FMG.AX2',
      name: 'FORTESCUE METALS GROUP LTD2'
    },
    {
      code: 'FMG.AX2',
      name: 'FORTESCUE METALS GROUP LTD2'
    },
    {
        code: 'TLS.AX2',
        name: 'TELSTRA CORPORATION LIMITED2'
      },
    {
      code: 'CWN.AX2',
      name: 'CROWN RESORTS LIMITED2'
    }
 ]

export function getRandom(min, max){
  return (Math.random() * (max - min) + min)
}

var i;
for (i = 0; i < companies_list.length; i++){
  companies_list[i].id = i
  companies_list[i].price = getRandom(0.01, 99.99).toFixed(2)
  companies_list[i].volume = Math.floor(getRandom(1000, 1000000))
  companies_list[i].value = Math.floor((companies_list[i].volume) * (companies_list[i].price))
}
