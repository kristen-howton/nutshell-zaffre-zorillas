// Module Purpose: Renders a dialog box to capture a new event entry
// Author: Crystal Elsey 

import { saveEvent } from "../events/EventProvider.js"

const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("newEventBtnClicked", customEvent => {
    const eventDialog = document.querySelector("#event__dialog")
    eventDialog.showModal()
})

export const EventDialog = () => {
    contentTarget.innerHTML += `
        <dialog id="event__dialog">
            <form class="event__form">
                <fieldset>
                    <label for="event--date">Date:</label>
                    <input id="event--date" name="event--date" type="date"/>
                </fieldset>
                <fieldset>
                    <label for="event--name">Name:</label>
                    <input id="event--name" name="event--name" type="text"/>
                </fieldset>
                <fieldset>
                    <label for="event--location">Location:</label>
                    <input id="event--location" name="event--location" type="text"/>
                </fieldset>
                <button id="saveEventBtn">Save Event</button>
            </form>
        </dialog>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEventBtn") {
        const eventDate = document.querySelector("#event--date").value 
        const eventName = document.querySelector("#event--name").value 
        const eventLocation = document.querySelector("#event--location").value 
        const newEvent = {
                date: eventDate.toLocaleDateString('en-US'),
                name: eventName,
                location: eventLocation
            }
        saveEvent(newEvent)
    }
})