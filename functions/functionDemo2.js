function demo() {
  var a = 90;
  {
    var b = 89;
    {
      var c = 88;
      {
        let d = 87;
        console.log("A :  " + a);
        console.log("B :  " + b);
        console.log("C :  " + c);
      }
      console.log("D :  " + d);
    }
  }
}

demo();

//   const e = 11;

//   var l = 48;

// const f = 12;

// var k = 47;

//   const g = 13;

//   var j = 46;

// const h = 14;

// var i = 45;
