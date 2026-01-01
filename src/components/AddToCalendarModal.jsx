import React, { useState } from "react";
import "../styles/favorites.scss";

export default function AddToCalendarModal({ recipe, onClose, onAdd }) {
    const [date, setDate] = useState("");

    if (!recipe) return null; // extra safety

    function handleSave() {
        if (!date) return alert("Please pick a date.");

        try {
            const raw = localStorage.getItem("calendarEvents");
            const events = raw ? JSON.parse(raw) : {};

            if (!events[date]) events[date] = [];

            events[date].push({
                id: recipe.id,
                title: recipe.title,
                image: recipe.image
            });

            localStorage.setItem("calendarEvents", JSON.stringify(events));
        } catch (err) {
            console.error("Calendar save error:", err);
        }

        if (onAdd) onAdd(date);
        onClose();
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Add to Calendar</h2>

                <p className="modal-title">{recipe.title}</p>

                <input
                    type="date"
                    className="modal-date-picker"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <div className="modal-buttons">
                    <button onClick={handleSave} className="modal-save-btn">Save</button>
                    <button onClick={onClose} className="modal-cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
}
