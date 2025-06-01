<>

    {/* Home Page */}
    <>
        <div className={styles.headline}>
            <h1>Events and Booking</h1>
            <p>Your Event, Our Expertise</p>
        </div>
        <hr />
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Location</th>
                    <th>Organizer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className={styles.actionBtns}>
                            <a href='' >View Bookings</a>


                            <button className={styles.deleteBtn}>Update</button>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>

    {/* Form Page */}

    <form className={styles.form}>
        <h2>Event Information</h2>
        <div className={styles.formGroup}>
            <label htmlFor="name">Event Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter event name"
                className={styles.input}
                required

            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                className={styles.input}
                required

            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="organizer">Organizer:</label>
            <input
                type="text"
                id="organizer"
                name="organizer"
                placeholder="Enter organizer"
                className={styles.input}
                required
            />
        </div>
        <button type="submit" className={styles.submitBtn}>
            Update
        </button>
    </form>

    {/* View Bookings Page */}
    <>
        <h1>Bookings of </h1>
        <hr />
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Event ID</th>
                    <th>Number of Tickets</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>
    </>

</>

