'use client';
import IconPencil from '@/components/icons/icon-pencil';
import { Button } from '@/components/ui/button';
import TimePicker from '@/components/ui/timepicker';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface ITimeSharingHolidayFormProps {
    data: any;
}

const TimeSharingHolidayForm = ({ data }: ITimeSharingHolidayFormProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const params = useParams();

    const defaultValues = {
        case_id: params?.caseId,
        share_holidays: 'no',
        mother_day: 'friday_to_monday',
        mother_day_time: {
            from: '10:00',
            to: '24:00',
        },
        mother_day_other: '1',
        mother_birthday: 'overnight_on_birthday',
        mother_birthday_time: {
            from: '10:00',
            to: '24:00',
        },
        mother_birthday_other: '',
        father_day: 'sunday',
        father_day_time: {
            from: '10:00',
            to: '24:00',
        },
        father_day_other: '',
        father_birthday: 'overnight_on_birthday',
        father_birthday_time: {
            from: '10:00',
            to: '24:00',
        },
        father_birthday_other: '',
        other_holidays: [
            {
                holiday: 'Christmas',
                applicable: true,
                reg_schedule: false,
                even: 'petitioner',
                odd: 'respondent',
                timeframe: '10:00 - 10:10',
                custom: null,
            },
            {
                holiday: 'Christmas New',
                applicable: true,
                reg_schedule: false,
                even: 'petitioner',
                odd: 'respondent',
                timeframe: '10:00 - 10:10',
                custom: null,
            },
        ],
        optional_information: {
            action_status: 'change',
            revised_text: '-',
        },
        monday_friday_holidays: 'attach_to_weekend',
    };

    const { register, handleSubmit, watch, setValue, getValues } = useForm({ defaultValues: defaultValues });
    const shareHolidays = watch('share_holidays');

    const onSubmit = () => {
        console.log('hshsh');
    };

    return (
        <>
            <div className="grow px-4 md:px-8 py-8">
                <h6 className="font-medium text-blue-dark text-sm/[17px]">Schedule</h6>
                <div className="mt-6 xl:grid grid-cols-4 gap-8 pb-8 border-b border-[#EAECF0]">
                    <div className="space-y-1.5 text-sm/[17px] mb-6">
                        <h6 className="font-medium text-blue-dark">Lorem Ipsum</h6>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form
                        ref={formRef}
                        className="xl:col-span-3 text-sm/[17px] space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">
                            <h6 className="font-medium text-blue-dark">Will you share the holidays?*</h6>
                            <div className="flex items-center gap-4 flex-wrap">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        className="peer custom-form-radio"
                                        value="yes"
                                        {...register('share_holidays')}
                                    />
                                    <div className="py-3 px-4 ring-1 ring-[#D0D5DD] rounded-lg text-center text-blue-dark text-sm/[17px] font-medium shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-white peer-checked:ring-green peer-checked:bg-green-light">
                                        Yes
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="radio"
                                        className="peer custom-form-radio"
                                        value="no"
                                        {...register('share_holidays')}
                                    />
                                    <div className="py-3 px-4 ring-1 ring-[#D0D5DD] rounded-lg text-center text-blue-dark text-sm/[17px] font-medium shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-white peer-checked:ring-green peer-checked:bg-green-light">
                                        No
                                    </div>
                                </div>
                            </div>
                        </div>

                        {shareHolidays === 'yes' && (
                            <>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Mother&apos;s Day*</h6>
                                    <div className="space-y-2">
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="friday_to_monday"
                                                    value="friday_to_monday"
                                                    {...register('mother_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="friday_to_monday">
                                                Mother enjoys the weekend Friday to Monday
                                            </label>
                                        </div>

                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="saturday_night"
                                                    value="saturday_night"
                                                    {...register('mother_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="saturday_night">
                                                Mother enjoys the Saturday night from{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />{' '}
                                                until return to school
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="sunday"
                                                    value="sunday"
                                                    {...register('mother_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="sunday">
                                                Mother enjoys Sunday from{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />{' '}
                                                until return to school
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="other"
                                                    value="other"
                                                    {...register('mother_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="other">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Mother&nbsp;s Birthday*</h6>
                                    <div className="space-y-2">
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="overnight_on_birthday"
                                                    value="overnight_on_birthday"
                                                    {...register('mother_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="overnight_on_birthday">
                                                Mother enjoys the overnight on birthday - Timeframe: From{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="overnight_proceeding_birthday"
                                                    value="overnight_proceeding_birthday"
                                                    {...register('mother_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="overnight_proceeding_birthday">
                                                Mother enjoys overnight proceeding birthday - Timeframe: From{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="mother_birthday_sunday"
                                                    value="sunday"
                                                    {...register('mother_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="mother_birthday_sunday">
                                                Mother enjoys Sunday from{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />{' '}
                                                until return to school
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="mother_birthday_other"
                                                    value="other"
                                                    {...register('mother_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="mother_birthday_other">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Father&nbsp;s Day*</h6>
                                    <div className="space-y-2">
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_day_friday_to_monday"
                                                    value="friday_to_monday"
                                                    {...register('father_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_day_friday_to_monday">
                                                Father enjoys the weekend Friday to Monday
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_day_saturday_night"
                                                    value="saturday_night"
                                                    {...register('father_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_day_saturday_night">
                                                Father enjoys the Saturday night from{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />{' '}
                                                until return to school
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_day_sunday"
                                                    value="sunday"
                                                    {...register('father_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_day_sunday">
                                                Father enjoys Sunday from{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />{' '}
                                                until return to school
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_day_other"
                                                    value="other"
                                                    {...register('father_day')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_day_other">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Father&nbsp;s Birthday*</h6>
                                    <div className="space-y-2">
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_birthday_overnight_on_birthday"
                                                    value="overnight_on_birthday"
                                                    {...register('father_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_birthday_overnight_on_birthday">
                                                Father enjoys the overnight on birthday - Timeframe: From{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_birthday_overnight_proceeding_birthday"
                                                    value="overnight_proceeding_birthday"
                                                    {...register('father_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_birthday_overnight_proceeding_birthday">
                                                Father enjoys overnight proceeding birthday - Timeframe: From{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_birthday_sunday"
                                                    value="sunday"
                                                    {...register('father_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_birthday_sunday">
                                                Mother enjoys Sunday from{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.from', date)}
                                                />{' '}
                                                to{' '}
                                                <TimePicker
                                                    onChange={(date: string) => setValue('mother_day_time.to', date)}
                                                />{' '}
                                                until return to school
                                            </label>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    className="peer absolute inset-0 opacity-0"
                                                    id="father_birthday_other"
                                                    value="other"
                                                    {...register('father_birthday')}
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <label htmlFor="father_birthday_other">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Other Holidays*</h6>
                                    <div className="mt-6 rounded-xl border border-[#EAECF0] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] overflow-x-auto">
                                        <table className="default-table holiday-table">
                                            <thead>
                                                <tr>
                                                    <th>Holiday</th>
                                                    <th>Applicable</th>
                                                    <th>Reg. Schedule</th>
                                                    <th>Even</th>
                                                    <th>Odd</th>
                                                    <th>Timeframe</th>
                                                    <th className="!text-left">Custom</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="flex items-center gap-3 text-sm/[17px] whitespace-nowrap">
                                                        <button type="button" className="text-blue shrink-0">
                                                            <IconPencil className="w-6 h-6" />
                                                        </button>
                                                        <span>Christmas Eve</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>
                                                        <div className="bg-[#FF00D6] m-auto w-8 h-8 rounded-full grid place-content-center text-sm text-white font-semibold">
                                                            <span>P</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="bg-green m-auto w-8 h-8 rounded-full grid place-content-center text-sm text-white font-semibold">
                                                            <span>R</span>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap">08:00 - 20:00</td>
                                                    <td className="!text-left">-</td>
                                                </tr>
                                                <tr>
                                                    <td className="flex items-center gap-3 text-sm/[17px] whitespace-nowrap">
                                                        <button type="button" className="text-blue shrink-0">
                                                            <IconPencil className="w-6 h-6" />
                                                        </button>
                                                        <span>Christmas Day</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td className="whitespace-nowrap">-</td>
                                                    <td className="!text-left">-</td>
                                                </tr>
                                                <tr>
                                                    <td className="flex items-center gap-3 text-sm/[17px] whitespace-nowrap">
                                                        <button type="button" className="text-blue shrink-0">
                                                            <IconPencil className="w-6 h-6" />
                                                        </button>
                                                        <span>Easter Sunday</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td className="whitespace-nowrap">-</td>
                                                    <td className="!text-left">-</td>
                                                </tr>
                                                <tr>
                                                    <td className="flex items-center gap-3 text-sm/[17px] whitespace-nowrap">
                                                        <button type="button" className="text-blue shrink-0">
                                                            <IconPencil className="w-6 h-6" />
                                                        </button>
                                                        <span>Passover</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td className="whitespace-nowrap">-</td>
                                                    <td className="!text-left">-</td>
                                                </tr>
                                                <tr>
                                                    <td className="flex items-center gap-3 text-sm/[17px] whitespace-nowrap">
                                                        <button type="button" className="text-blue shrink-0">
                                                            <IconPencil className="w-6 h-6" />
                                                        </button>
                                                        <span>4th of July</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" className="form-checkbox" />
                                                    </td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td className="whitespace-nowrap">-</td>
                                                    <td className="!text-left">Lorem Ipsum</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 flex items-center flex-wrap justify-end gap-5 text-grey text-sm/[17px]">
                                        <div className="flex items-center gap-3">
                                            <span className="shrink-0 w-5 h-5 rounded-full bg-[#FF00D6]"></span>
                                            <div>Petitioner (Me)</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="shrink-0 w-5 h-5 rounded-full bg-green"></span>
                                            <div>Respondent (Partner)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Optional Information*</h6>
                                    <div className="text-sm/[17px] space-y-4">
                                        <p>
                                            “When the parents are using an alternating weekend plan and the holiday
                                            schedule would result in one parent having the child(ren) for three weekends
                                            in a row, the parents will exchange the following weekend, so that each has
                                            two weekends in a row before the regular alternating weekend pattern
                                            resumes.”
                                        </p>
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <div className="relative">
                                                <input
                                                    type="radio"
                                                    name="optional-info"
                                                    className="peer custom-form-radio"
                                                />
                                                <div className="py-3 px-4 ring-1 ring-[#D0D5DD] rounded-lg text-center text-blue-dark text-sm/[17px] font-medium shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-white peer-checked:ring-green peer-checked:bg-green-light">
                                                    Keep
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="radio"
                                                    name="optional-info"
                                                    className="peer custom-form-radio"
                                                />
                                                <div className="py-3 px-4 ring-1 ring-[#D0D5DD] rounded-lg text-center text-blue-dark text-sm/[17px] font-medium shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-white peer-checked:ring-green peer-checked:bg-green-light">
                                                    Change
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="radio"
                                                    name="optional-info"
                                                    className="peer custom-form-radio"
                                                />
                                                <div className="py-3 px-4 ring-1 ring-[#D0D5DD] rounded-lg text-center text-blue-dark text-sm/[17px] font-medium shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] bg-white peer-checked:ring-green peer-checked:bg-green-light">
                                                    Exclude
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h6 className="font-medium text-blue-dark">Monday and Friday Holidays*</h6>
                                    <div className="space-y-2">
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    name="holiday"
                                                    className="peer absolute inset-0 opacity-0"
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <span>Attach to the weekend so parent may have an extra overnight</span>
                                        </div>
                                        <div className="flex md:items-center gap-3">
                                            <span className="relative">
                                                <input
                                                    type="radio"
                                                    name="holiday"
                                                    className="peer absolute inset-0 opacity-0"
                                                />
                                                <span className="flex w-5 h-5 border border-[#D0D5DD] rounded-full peer-checked:bg-blue peer-checked:border-blue peer-checked:bg-[url(/assets/images/tick.svg)]"></span>
                                            </span>
                                            <span>Stick to regular predefined timesharing schedule</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
            <div className="py-3 px-6 lg:px-[70px] bg-blue-light text-right border-t border-primary sticky bottom-0 inset-x-0">
                <Button type="button" onClick={() => formRef.current?.requestSubmit()}>
                    Next
                </Button>
            </div>
        </>
    );
};

export default TimeSharingHolidayForm;
