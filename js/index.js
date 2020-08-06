// 'https://www.googleapis.com/youtube/v3/search&part=snippet&key=AIzaSyBfksKBn1xoP5nWdH4PMRPSqKvzPiHR90U'


async function go(){
    let embed = 'https://www.youtube.com/embed/'

    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults='
    let apiKey = '&key=AIzaSyBfksKBn1xoP5nWdH4PMRPSqKvzPiHR90U'
    let type = document.getElementById("type").value    
    let maxResults = 10
    let q = document.getElementById('searchText').value 
    
    let resp = await fetch(url+maxResults+apiKey+'&type='+type+'&q='+q)
    let otvet = await resp.json()

    console.log(otvet.items)

    otvet.items.forEach(item => {
        let ifrm = document.createElement('iframe')
        var h = document.createElement('h3')
        var wrap = document.getElementById('wrap')
        ifrm.style.width = 600
        ifrm.style.height = 550
        ifrm.setAttribute('src', embed+item.id.videoId)
        ifrm.setAttribute('allowfullscreen', '')
        h.innerHTML = item.snippet.title
        
        wrap.appendChild(ifrm)
        wrap.appendChild(h)
    });
}

