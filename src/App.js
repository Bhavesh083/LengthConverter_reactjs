import React, {useState} from 'react';
import Ap from './Ap.css' 

function App() {

const [unit1, setUnit1] = useState('');
const [unit2, setUnit2] = useState(''); 
const [value1, setValue1] = useState(null); 
const [value2, setValue2] = useState(null); 

 const look = (e) =>{
   setUnit1(e.target.value)
 }
 const looks = (e) =>{
    setUnit2(e.target.value)
 }
 const settingVal = (e) =>{
    setValue1(e.target.value);
 }
 const convertBut = () =>{
     var calc = value1;
     switch (unit1) {
        case 'km':
             switch (unit2) {
                    case 'm':
                        setValue2(+calc*1000)
                        break;
                    case 'km':
                        setValue2(+calc)
                        break;
                    case 'cm':
                        setValue2(+calc*100000)
                        break;
                    case 'mm':
                        setValue2(+calc*1000000)
                        break;
                    case 'f':
                        setValue2(+calc*3280.8)
                        break;
                    case 'i':
                        setValue2(+calc*39370.07874)
                        break;
                    case 'y':
                        setValue2(+calc*1093.6)
                        break;
                    case 'mi':
                        setValue2(+calc*0.6214)
                        break;
                default:
                    break;
            }
            break;
        case 'm':
            switch (unit2) {
                case 'm':
                    setValue2(+calc)
                    break;
                case 'km':
                    setValue2(+calc/1000)
                    break;
                case 'cm':
                    setValue2(+calc/0.010000)
                    break;
                case 'mm':
                    setValue2(+calc/0.0010000)
                    break;
                case 'f':
                    setValue2(+calc*3.2808)
                    break;
                case 'i':
                    setValue2(+calc*39.370)
                    break;
                case 'y':
                    setValue2(+calc*1.0936)
                    break;
                case 'mi':
                    setValue2(+calc*0.00062137)
                    break;
                  default:
                   break;
        }             
            break;
        case 'cm':
            switch (unit2) {
                case 'm':
                    setValue2(+calc/100.00)
                    break;
                case 'km':
                    setValue2(+calc/100000)
                    break;
                case 'cm':
                    setValue2(+calc)
                    break;
                case 'mm':
                    setValue2(+calc/0.10000)
                    break;
                case 'f':
                    setValue2(+calc*0.032808)
                    break;
                case 'i':
                    setValue2(+calc*0.39370)
                    break;
                case 'y':
                    setValue2(+calc*0.010936)
                    break;
                case 'mi':
                    setValue2(+calc*0.0000062137)
                    break;
            default:
                break; 
            }            
            break;
        case 'mm':
            switch (unit2) {
                case 'm':
                    setValue2(+calc/1000.0)
                    break;
                case 'km':
                    setValue2(+calc/1000000)
                    break;
                case 'cm':
                    setValue2(+calc/10.000)
                    break;
                case 'mm':
                    setValue2(+calc)
                    break;
                case 'f':
                    setValue2(+calc*0.0032808)
                    break;
                case 'i':
                    setValue2(+calc*0.039370)
                    break;
                case 'y':
                    setValue2(+calc*0.0010936)
                    break; 
                case 'mi':
                    setValue2(+calc*0.00000062137)
                    break;
            default:
                break;
            }
            break;
        case 'mi':
            switch (unit2) {
                case 'm':
                    setValue2(+calc/0.00062137)
                    break;
                case 'km':
                    setValue2(+calc/0.62137)
                    break;
                case 'cm':
                    setValue2(+calc/0.0000062137)
                    break;
                case 'mm':
                    setValue2(+calc/0.00000062137)
                    break;
                case 'f':
                    setValue2(+calc*5280.0)
                    break;
                case 'i':
                    setValue2(+calc*63360)
                    break;
                case 'y':
                    setValue2(+calc*1760.0)
                    break;
                case 'mi':
                    setValue2(+calc)
                    break;
                default:
                break;
            }
            break;
        case 'y':
            switch (unit2) {
                case 'm':
                        setValue2(+calc/1.0936)
                        break;
                case 'km':
                        setValue2(+calc/1093.6)
                        break;
                case 'cm':
                        setValue2(+calc/0.010936)
                        break;
                case 'mm':
                        setValue2(+calc/0.0010936)
                        break;
                case 'f':
                        setValue2(+calc*3.0000)
                        break;
                case 'i':
                        setValue2(+calc*36.000)
                        break;
                case 'y':
                        setValue2(+calc)
                        break;
                case 'mi':
                        setValue2(+calc*0.00056818)
                        break;
                    default:
                        break;
                        }
             break;
        }
 }

    return (
        <div>
            <div className='nav'>
                <p>Length Converter</p>
            </div>
            <div className='app'>
                <h3>Length Converter</h3>
                <input className='onebox' placeholder='From......' value={value1} onChange={(e)=>settingVal(e)} />
                <button onClick={()=>convertBut()}>convert</button>
                <input className='twobox' placeholder='To......'  value={value2}/>
                <select className='oneviewbox' onChange={(e)=>look(e)}>
                    <option selected='selected'>Set Unit</option>
                    <option value='km'>Kilometre</option>
                    <option value='m' >Metre</option>
                    <option value='cm'>Centimetre</option>
                    <option value='mm'>Millimetre</option>
                    <option value='mi'>Mile</option>
                    <option value='y'>Yard</option>
                </select>
            <select className='twoviewbox'onChange={(e)=>looks(e)}>
                    <option selected='selected'>Set Unit</option>
                    <option value='km'>Kilometre</option>
                    <option value='m'>Metre</option>
                    <option value='cm'>Centimetre</option>
                    <option value='mm'>Millimetre</option>
                    <option value='mi'>Mile</option>
                    <option value='y'>Yard</option>
                </select>
            </div>
            <div className='info'>
                <h4>Available Units</h4>
                <ul>
                    <li>Kilometre</li>
                    <li>Metre</li>
                    <li>Centimetre</li>
                    <li>Millimetre</li>
                    <li>Mile</li>
                    <li>Yard</li>
                </ul>
            </div>
        </div>
    )
}

export default App

 
