// ==UserScript==
// @name         Codeforces Friends Table Enhancer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace friends table with custom sorted rating and contests count
// @author       YourName
// @match        https://codeforces.com/friends*
// @grant        none
// ==/UserScript==

/*
  ============================================
  Script: Codeforces Friends Enhancer
  Author: Bankim Chandra Das
  GitHub: https://github.com/Bankim2410
  ============================================
*/

(function() {
    'use strict';

    function waitForElement(selector, callback) {
        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el) {
                observer.disconnect();
                callback(el);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Replace the friends table
    function replaceTable(original) {
        // Get list of friends from existing table
        const rows = Array.from(original.querySelectorAll('tr')).slice(1); // skip header
        const handles = rows.map(row => row.querySelector('a')?.textContent?.trim()).filter(Boolean);

        if (handles.length === 0) return;

        fetch(`https://codeforces.com/api/user.info?handles=${handles.join(';')}`)
            .then(res => res.json())
            .then(data => {
                const users = data.result.map(u => ({
                    handle: u.handle,
                    rating: u.rating || 'Unrated',
                    contests: u.rating ? u.maxRank : '—'
                }));

                // Sort by rating descending
                users.sort((a, b) => (b.rating || 0) - (a.rating || 0));

                const table = document.createElement('table');
                table.className = 'rtable';
                table.style.width = '100%';
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Handle</th>
                            <th>Rating</th>
                            <th>Highest Achieved Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map((u, i) => `
                            <tr>
                                <td>${i + 1}</td>
                                <td><a href="https://codeforces.com/profile/${u.handle}">${u.handle}</a></td>
                                <td>${u.rating}</td>
                                <td>${u.contests}</td>
                            </tr>`).join('')}
                    </tbody>
                `;

                original.replaceWith(table);
            });
    }

    waitForElement('.datatable table', replaceTable);
})();
