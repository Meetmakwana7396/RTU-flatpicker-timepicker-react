'use client';
import React, { useState } from 'react';
import 'flatpickr/dist/themes/light.css';

import Flatpickr from 'react-flatpickr';

interface ITimePickerProps {
    onChange?: (date: string) => void;
}

const TimePicker = ({ onChange }: ITimePickerProps) => {
    const [date, setDate] = useState<Date | string | number>(new Date());

    const handleChange = (selectedDates: Date[]) => {
        const [selectedDate] = selectedDates;
        if (selectedDate) {
            setDate(selectedDate);
            onChange && onChange(`${selectedDate.getHours()}:${selectedDate.getMinutes()}`);
        }
    };

    return (
        <Flatpickr
            options={{
                enableTime: true,
                noCalendar: true,
                time_24hr: true,
                defaultHour: 2,
            }}
            className="!w-12 inline-flex bg-neutral-200 p-1 rounded text-center"
            value={date}
            onChange={handleChange}
        />
    );
};

export default TimePicker;
