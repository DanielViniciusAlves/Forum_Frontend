export async function auth(axios, router){
    const accessToken = window.localStorage.getItem('access-token')
    const PATH_API = '/auth'
    const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true , 
    };
    await axios.post(`/api/v1${PATH_API}`, {
    access_token: accessToken
    },
    config)
    .then((response) => {
        console.log(response)
    }, (error) => {
        router.push('/login')
    });
}