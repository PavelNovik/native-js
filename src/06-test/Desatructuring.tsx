import React, {FC} from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string, name?: string }>
    address: {
        street: {
            title: string

        }
    }
}

type PropsType = {
        title: string
        man: ManType
        food: Array<string>
        car: {
            model: string
        }
    }
const Desatructuring: FC<PropsType> = ({title, man, ...props}) => {
    // const title = props
    // const name = props.man
    // const {title, man, ...restProps} = props
    // const {title, man: {name}} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.model}</div>

        </div>
    );
};

export default Desatructuring;