import SummaryTable from "../SummaryTable/SummaryTable";

const GameRound = () => {
    return (<>
        <p>Choose one or more of the Recommendations to buy</p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
            Click to Expand
        </button>

        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <SummaryTable></SummaryTable>
            </div>
        </div>

    </>)
};

export default GameRound;