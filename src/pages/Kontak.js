// Kontak.js
import React, { useState } from 'react';

function Kontak() {
    const [pesan, setPesan] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(pesan);
    };

    return (
        <div>
            <h1>Kontak</h1>
            <form onSubmit={handleFormSubmit}>
                <textarea
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Ketik pesan Anda di sini"
                ></textarea>
                <button type="submit">Kirim</button>
            </form>
        </div>
    );
}

export default Kontak;
