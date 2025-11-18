import Navbar from '../components/UpperNavBar';
import { useState } from 'react';
import "../styles/calendar.scss";

function Calendar() {
    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState(null); // "add" or "view"
    const [selectedDay, setSelectedDay] = useState(null);

    // Events stored by date
    const [events, setEvents] = useState({
        "2025-11-17": [
            { id: 1, title: "BBQ Chicken Bowl"},
            { id: 2, title: "Avocado Toast"}
        ]
    });

    // Open modal to ADD a recipe
    function openAddModal(day) {
        setSelectedDay(day);
        setModalMode("add");
        setIsModalOpen(true);
    }

    // Open modal to VIEW recipes
    function openViewModal(day) {
        setSelectedDay(day);
        setModalMode("view");
        setIsModalOpen(true);
    }

    // Save recipe to selected day
    function saveRecipe(recipeTitle) {
        const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

        setEvents(prev => ({
            ...prev,
            [dateKey]: [
                ...(prev[dateKey] || []),
                { id: Date.now(), title: recipeTitle }
            ]
        }));

        setIsModalOpen(false);
    }

    // Date logic
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const monthNames = [
        "January", "February", "March", "April", 
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysArray = [...Array(daysInMonth).keys()].map(i => i + 1);

    // Change months
    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const deleteRecipe = (dateKey, recipeId) => {
        setEvents(prev => {
            const updated = { ...prev };

            updated[dateKey] = updated[dateKey].filter(recipe => recipe.id !== recipeId);

            if (updated[dateKey].length === 0) {
                delete updated[dateKey];
            }

            return updated;
        })
    }
    return (
        <div>
            <Navbar />
            <div className="calendar-page">

                {/* Month Navigation */}
                <div className="calendar-header">
                    <button onClick={prevMonth}>◀</button>
                    <h2>{monthNames[currentMonth]} {currentYear}</h2>
                    <button onClick={nextMonth}>▶</button>
                </div>

                {/* Days of the week */}
                <div className="calendar-grid day-labels">
                    <div>Sun</div><div>Mon</div><div>Tue</div>
                    <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>

                {/* Calendar Grid */}
                <div className="calendar-grid">
                    {/* Empty placeholders */}
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                        <div key={`empty-${i}`} className="empty"></div>
                    ))}

                    {/* Calendar Days */}
                    {daysArray.map((day) => {
                        const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

                        const hasEvents = events[dateKey] && events[dateKey].length > 0;

                        return (
                            <div
                                key={day}
                                className={`calendar-day ${hasEvents ? "has-events" : ""}`}
                                onClick={() => openViewModal(day)}  // View recipes
                            >
                                <span className="day-number">{day}</span>

                                {/* ADD BUTTON */}
                                <button
                                    className="add-button"
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevents day click
                                        openAddModal(day);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">

                        {/* VIEW SAVED RECIPES */}
                        {modalMode === "view" && (
                            <>
                                <h3>Meals for {selectedDay}</h3>

                                {events[
                                    `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`
                                ] && events[
                                    `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`
                                ].length > 0 ? (
                                    <ul>
                                        {events[
                                            `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`
                                        ].map(event => (
                                            <li key={event.id} className="recipe-item">
                                                {event.title}
                                                
                                                    <button
                                                        className="delete-recipe"
                                                        onClick={() => deleteRecipe(
                                                            `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2,"0")}`,
                                                            event.id
                                                        )}
                                                    >
                                                        ✕
                                                    </button>
                                                </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No meals saved for this date.</p>
                                )}
                            </>
                        )}

                        {/* ADD RECIPE MODE */}
                        {modalMode === "add" && (
                            <>
                                <h3>Add Recipe to {selectedDay}</h3>

                                {/* Replace later with real recipe data */}
                                <button onClick={() => saveRecipe("Recipe Example")}>
                                    Add Recipe Example
                                </button>
                            </>
                        )}

                        <button className="close" onClick={() => setIsModalOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calendar;
