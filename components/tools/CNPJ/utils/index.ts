function randomNumber() {
  return Math.floor(Math.random() * 9)
}

function createListNumber() {
  const lstNumbers = new Array()

  for (let i = 0; i < 8; i++)
      lstNumbers.push(randomNumber())

  for (let i = 0; i < 3; i++)
      lstNumbers.push(0)

  lstNumbers.push(1)

  return lstNumbers
}

function calculateRestCnpj(sumDigit:number) {
  return sumDigit % 11;
}

function calculateSumDigit(lstNumbers:number[]) {
  let sumDigit = 0
  let salt = 9

  for (let i = lstNumbers.length - 1; i >= 0; i--) {
      sumDigit += lstNumbers[i] * salt--
      if (salt < 2)
          salt = 9
  }

  return sumDigit
}

function calculateDigitCnpj(lstNumbers: number[]) {
  let digit = calculateRestCnpj(calculateSumDigit(lstNumbers))

  if (digit >= 10)
      return 0

  return digit
}

export const checkCNPJ = (cnpj: string) => {
  cnpj = unmaskCNPJ(cnpj);

  if (cnpj.length != 14)
  return false;

if (cnpj == "00000000000000" || 
    cnpj == "11111111111111" || 
    cnpj == "22222222222222" || 
    cnpj == "33333333333333" || 
    cnpj == "44444444444444" || 
    cnpj == "55555555555555" || 
    cnpj == "66666666666666" || 
    cnpj == "77777777777777" || 
    cnpj == "88888888888888" || 
    cnpj == "99999999999999") {
    return false;
  }

  var tamanho:number = cnpj.length - 2
  var numeros:string = cnpj.substring(0,tamanho);
  const digitos:string = cnpj.substring(tamanho);

  var pos = tamanho - 7;
  var soma:number = 0;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if( resultado !== parseInt(digitos.charAt(0)) ) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;      
    }

  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if( resultado !== parseInt(digitos.charAt(1)) ) {
    return false;
  }

  return true;
}

export const maskCNPJ = (v: string) => {
  v = (''+v).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  return v
}

export const unmaskCNPJ = (v: string) => {
  return v.replace(/\D/g, '');
}

export default (masked: boolean = false) => {
  const lstNumbers = createListNumber()
  lstNumbers.push(calculateDigitCnpj(lstNumbers))

  const res = `${lstNumbers.join('')}${calculateDigitCnpj(lstNumbers)}`;

  return masked ? maskCNPJ(res) : res;
}
