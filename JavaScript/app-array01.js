// Amostra ex do Prof. Su >>>===>>> [15.48, 15.32, 14.45, 14.72, 15.03];
var anValues = [15.48, 15.32, 14.45, 14.72, 15.03];

var nQtdValues = anValues.length;

var nSum = 0;
anValues.forEach(function(nValue) {
  nSum += nValue;
});

var fMedio = nSum / nQtdValues;

var fDesvio = 0;
anValues.forEach(function (nValue) {
  fDesvio += Math.pow(fMedio - nValue, 2);
});
fDesvio = Math.sqrt(fDesvio / nQtdValues);

console.log("Values     :", anValues);
console.log("Qtd values :", nQtdValues);
console.log("Sum values :", nSum);
console.log("Med values :", fMedio.toFixed(2));
console.log("Desvio     :", fDesvio.toFixed(3));
console.log("IC80%      :", (fMedio - 1.28 * fDesvio).toFixed(2), "-", (fMedio + 1.28 * fDesvio).toFixed(2));
console.log("IC90%      :", (fMedio - 1.64 * fDesvio).toFixed(2), "-", (fMedio + 1.64 * fDesvio).toFixed(2));
console.log("IC95%      :", (fMedio - 1.96 * fDesvio).toFixed(2), "-", (fMedio + 1.96 * fDesvio).toFixed(2));
console.log("IC99%      :", (fMedio - 2.57 * fDesvio).toFixed(2), "-", (fMedio + 2.57 * fDesvio).toFixed(2));
