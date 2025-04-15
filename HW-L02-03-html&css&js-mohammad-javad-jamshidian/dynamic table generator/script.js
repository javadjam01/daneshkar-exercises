document.getElementById("createBtn").addEventListener("click", function() {
    const rowNum = parseInt(document.getElementById("rowNum").value);
    const columnNum = parseInt(document.getElementById("columnNum").value);
    const tableContainer = document.getElementById("tableContainer");

    // removing previous table if exists
    tableContainer.innerHTML = "";

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.style.backgroundColor = "#f2f2f2";
    headerRow.style.fontWeight = "bold";

    for (let j = 0; j < columnNum; j++) {
        const th = document.createElement("th");
        th.textContent = `Header ${j + 1}`;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (let i = 0; i < rowNum; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columnNum; j++) {
            const td = document.createElement("td");
            td.textContent = `Row ${i + 1} Col ${j + 1}`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    tableContainer.appendChild(table);
})