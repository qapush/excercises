
class Kurs {
    getRate = async () => {
        let data = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json')
            .then(res => res.json())
        return data;
    }



}

export default Kurs;