import SummaryTable from "../SummaryTable/SummaryTable";
import DamagePotentialMessage from "../../Components/DamagePotentialMessage";

const DamagePotential=() =>{

  const randomMessage = () => {
    DamagePotential()
  }


    return (
        <div>
            <p className="text-white">When you press the Button it will roll 3 random damages</p>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Click to Expand
  </button>

  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  <SummaryTable></SummaryTable>
  </div>
</div>
</div>
    )
}
export default DamagePotential;