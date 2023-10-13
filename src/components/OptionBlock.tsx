import * as React from 'react';
import {useState} from 'react';

const activeOptionClass = (index: number, parameter: number) => parameter === index ? 'active' : ''
const sellType = ["опт", "розница"]
const [sellOption, setSellOption] = useState(0)
const [sizeOption, setSizeOption] = useState(0)


export const OptionBlock = ({sizes}) =>  {
    return (
        <div className="tulip-block__selector">
            <ul>
                {sellType.map((type, i) =>
                    <li
                        key={type}
                        className={activeOptionClass(i, sellOption)}
                        onClick={
                            () => {
                                setSellOption(i)
                            }
                        }
                    >{sellType[i]}</li>)}
            </ul>
            <ul>
                {sizes.map((size, i) => <li
                    key={size}
                    className={activeOptionClass(i, sizeOption)}
                    onClick={
                        () => {
                            setSizeOption(i);
                        }
                    }
                >{size} см.</li>)}
            </ul>
        </div>
    );
};