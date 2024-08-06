const student = {
    name: "kanhu",
    age:21,
    eng:75,
    math:65,
    phy:56,
    getAvg(){
        let avg =(this.eng + this.math + this.phy)/3;
        // console.log('${this.name} got avg marks = ${avg}');
        // console.log(avg);