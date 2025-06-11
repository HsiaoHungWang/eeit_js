
//檢查是不是空字串
const checkEmpty = item => {
    const data = item.trim();
    let isValid = true;
    if (data === '' || data.length === 0) {
        isValid = false;
    }
    return isValid;
}

//檢查Email格式是否正確
const checkEmailFormat = email => {
    const re = /^.+@.+\..{2,3}$/;
    let isValid = true;
    if (!re.test(email)) {
        isValid = false;
    }
    return isValid;
}

const checkPhone = phone => {
    return true;
}

export { checkEmpty, checkEmailFormat, checkPhone };