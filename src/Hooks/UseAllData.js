const UseAllData = async () => {

   return fetch('https://luxe-next-server.vercel.app/rooms')
        .then(res => res.json)
        .then(data=>console.log(data))
};

export default UseAllData;