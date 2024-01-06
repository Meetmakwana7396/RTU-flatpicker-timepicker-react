import TimeSharingHolidayForm from '@/components/account/case/parental-plan/timesharing/time-sharing-holiday-form';
import axios from '@/lib/axios';

export default async function TimesharingHolidayPage({ params }: { params: { caseId: string } }) {
    try {
        const { data } = await axios.get(`/cases/parenting-plan/${params?.caseId}`);

        return (
            <>
                <div className="py-6 px-4 md:p-8 md:pb-6 border-b border-[#EAECF0] space-y-1">
                    <h1 className="text-xl md:text-3xl/9 font-semibold -tracking-[0.3px] text-blue-dark">
                        Parenting Plan: Timesharing (Holidays)
                    </h1>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <TimeSharingHolidayForm data={data} />
            </>
        );
    } catch (error) {}
}
