import { IGetTime } from "../interface";

export const getCurrentTime = (): IGetTime => {
    const getCurrentDay = new Date();
    const getCurrentHour = getCurrentDay.getHours();
    const getCurrentMinute = getCurrentDay.getMinutes();
    const getCurrentSecond = getCurrentDay.getSeconds();
    const getAmPm = getCurrentHour >= 12 ? "PM" : "AM";
    const getHour = getCurrentHour % 12 || 12;
    const getTwentyFourHour =
        getCurrentHour <= 9 ? `0${getCurrentHour}` : `${getCurrentHour}`;
    const getMinute =
        getCurrentMinute <= 9 ? `0${getCurrentMinute}` : `${getCurrentMinute}`;

    return {
        timeFormat: getAmPm,
        timeHour: getHour,
        timeMinute: getMinute,
        timeSecond: getCurrentSecond,
    };
}