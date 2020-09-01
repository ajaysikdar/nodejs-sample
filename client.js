const axios = require('axios');
const url = "http://localhost:8080/api/getData"
const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

const post_req_in_loop = async () => {
    let data;
    try{
        let res = await axios.get(url)
        data = res.data.data
    }
    catch(err){
        console.log(err);
    }
    console.log("Data from backend---", data)
    let results=[];
    for (const value of data){
        try {
            let config = {
                method: 'post',
                url: 'http://localhost:8080/api/postData',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ "id": value })
            };
            let res = await axios(config)
            results.push(res.data)
        }
        catch (err) {
            console.log(err);
        }
    }
    console.log("results ", results)
    console.log("now send results by res.send")
}

post_req_in_loop()
