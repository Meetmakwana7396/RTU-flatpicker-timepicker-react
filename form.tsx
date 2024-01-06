'use client';

import TimePicker from '@/components/ui/timepicker';


interface IForm {
    data: any;
}

const Form = ({ data }: IForm) => {

  

    return (
        <>
            
                                                <TimePicker
                                                    onChange={(date: string) => console.log(date)}
                                                />
        </>
    );
};

export default Form;
