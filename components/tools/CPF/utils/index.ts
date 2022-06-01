const randomNum = () => {
  return ("" + Math.floor(Math.random() * 999)).padStart(3, '0');
}

const validDig = (n1: string, n2: string, n3: string, n4?:number) => {
  let nums = n1.split("").concat(n2.split(""), n3.split(""));

  if (n4){
    nums[9] = ''+n4;
  }

  let x = 0;

  for (let i = (n4 ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }

  const y = x % 11;

  return y < 2 ? 0 : 11 - y;
}

export const checkCPF = (cpf: string) => {
  cpf = unmaskCPF(cpf);

  if (
    !cpf ||
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

export const maskCPF = (v: string) => {
  v = v.replace(/\D/g, "")

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  } else {
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
  }

  return v
}

export const unmaskCPF = (v: string) => {
  return v.replace(/\D/g, '');
}

 const generateCPF = (masked: boolean = false) => {
  const n1 = randomNum(),
        n2 = randomNum(),
        n3 = randomNum(),
        d1 = validDig(n1, n2, n3);

  const res = `${n1}${n2}${n3}${d1}${validDig(n1,n2,n3,d1)}`;

  return masked ? maskCPF(res) : res;
}

export default generateCPF;
