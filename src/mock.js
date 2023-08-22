import Mock from 'mockjs'
const { Random } = Mock


Mock.mock('/captcha', 'get', () => {
    const data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('120x40', 'p7n5w')
    }
    return {
        code: 200,
        mes:'操作成功',
        data
    }
})

Mock.mock('/login', 'post', () => {

    return {
        code: 400,
        mes:'驗證碼錯誤',
    }
})