import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'easyRead'
})
export class EasyReadPipe implements PipeTransform {
    transform(numberString: string) {
        let dotPos: number = numberString.indexOf('.');
        let number: number = Number.parseFloat(numberString);
        if (Math.abs(number) >= 1e+12 || (Math.abs(number) < 1e-11 && number !== 0)) {
            return number.toExponential(9);
        } else if (Math.abs(number) < 1e-6 && number !== 0 && numberString.indexOf('e-') !== -1) {
            let exp: string = (numberString.split('e-')[1]) ? numberString.split('e-')[1] : '';
            let fracDigits: number = Number.parseInt(exp);
            /*console.log(numberString);
            console.log(fracDigits);*/
            return number.toLocaleString(undefined, {
                minimumFractionDigits: fracDigits
            });
        } else if (dotPos === -1) {
            return number.toLocaleString();
        } else {
            let fractionalPart: string = numberString.slice(dotPos + 1);
            let fracDigits: number = (fractionalPart.length < 11) ? fractionalPart.length : 11;
            let dot: string = (fracDigits === 0) ? '.' : '';
            return number.toLocaleString(undefined, {
                minimumFractionDigits: fracDigits
            }) + dot;
        }
    }
}