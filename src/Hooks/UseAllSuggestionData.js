const UseAllSuggestionData = async () => {
    const res = await fetch('https://luxe-next-server.vercel.app/rooms')
    const data = await res.json()

    console.log(data)

    return data
};

export default UseAllSuggestionData;