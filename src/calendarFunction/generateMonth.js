export default function generateMonth(monthDate) {
        const now = new Date();
        const days = [];
        let lastDayInMonth = new Date(
            monthDate.getFullYear(),
            monthDate.getMonth() + 1,
            0
        );
        const dayInMiliseconds = -24 * 60 * 60 * 1000;
        let firstDayInMonth = new Date(
            monthDate.getFullYear(),
            monthDate.getMonth(),
            1
        );
        const firstweekday =
            firstDayInMonth.getDay() === 0 ? 7 : firstDayInMonth.getDay();
        const firstDayInCalendar = new Date(
            firstDayInMonth.setMilliseconds(dayInMiliseconds * firstweekday)
        );
        for (let i = -firstweekday + 1; i < 0; ++i) {
            days.push({
                day: i,
                date: new Date(
                    firstDayInCalendar.setMilliseconds(-dayInMiliseconds)
                ),
                clickable: false,
            });
        }
        const lastDayInMonthCopy = new Date(lastDayInMonth);
        const lastweekday =
            lastDayInMonthCopy.getDay() === 0 ? 7 : lastDayInMonthCopy.getDay();
        let fakeDay = 32;
        for (let i = lastweekday + 1; i < 8; ++i) {
            days.push({
                day: fakeDay,
                date: new Date(
                    lastDayInMonthCopy.setMilliseconds(-dayInMiliseconds)
                    ),
                    clickable: false,
                });
                ++fakeDay;
            }
            
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        while (lastDayInMonth?.getDate() !== 1) {
            const date = new Date(lastDayInMonth);
            days.push({
                day: lastDayInMonth?.getDate(),
                date,
                clickable: true,
                today: date - today === 0,
            });
            lastDayInMonth.setMilliseconds(dayInMiliseconds);
        }
        days.push({
            day: lastDayInMonth?.getDate(),
            date: new Date(lastDayInMonth),
            clickable: true,
        });
        return days.sort((object1, object2) => object1.day > object2.day);
    }