import TitleTab from "./TitleTab";

function ClassSchedule() {
    return (
        <div id="schedule" className="max-w bg-[#696081] p-4 relative">
            <TitleTab title="CLASS SCHEDULE" bgcolor="bg-[#696081]" textcolor="text-white"/>

            <div className="responsive-iframe-container mt-12 md:mt-24 mb-12 md:mb-20">

				<iframe className="max-h-bg" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FChicago&showPrint=0&mode=AGENDA&showTabs=0&showTz=0&showCalendars=0&title=Class%20Schedule&showTitle=0&showNav=0&showDate=0&src=ZDI0YWUzOTBjMDc1MDU4ODFlYjBjMzZkNTljMTk1ODE3Mzc1ODEzNzQxZDljNmRmY2NlZmQ0MjMzOTYxOTQxMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300&color=%230B8043"></iframe>

			</div>
        </div>
    );
}

export default ClassSchedule;