import { generateDatesFromYearBeginning } from "../utils/generate-date-from-year-beginning";
import { HabitDay } from "./Habit";

const weekDays = ['D','S','Q','Q','S','S','D'];
const summaryDates = generateDatesFromYearBeginning();

const minimunSummaryDatesSize = 18 * 7;
const amountOfDayToFill = minimunSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, index) => {
                    return (
                        <div
                            key={`${weekDay}-${index}`}
                            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                            {weekDay}
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map((date) => {
                    return <HabitDay key={date.toString()}/>
                })}
                {amountOfDayToFill > 0 && Array.from({ length: amountOfDayToFill }).map((_, index) => {
                    return (
                        <div key={index} className="w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}
            </div>
        </div>
    )
}