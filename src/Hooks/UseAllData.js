const UseAllData = async () => {

    fetch('https://luxe-next-server.vercel.app/rooms')
        .then(res => res.json)
        .then(data=>console.log(data))

    return <> </>
};

export default UseAllData;