import type {
  String150,
  String50,
  PhoneNumber,
  Email,
  NC_County,
  Int_0_50,
  Int_0_10,
  Int_0_12,
} from "./second-harvest-types";

const orderFoodFromSecondHarvest = (secondHarvestForm: SecondHarvestForm) => {};

interface SecondHarvestForm {
  agencyName: String150;
  county: NC_County;
  contactPerson: String50;
  cellPhone: PhoneNumber;
  email: Email;
  appointmentDate: Date;
  orders: ProgramOrderForm[];
}

const identifyMultipleOrders = (orders: ProgramOrderForm[]) => {
  if (orders.length > 1) return true;

  return false;
};

const identifyAgencyId = (orders: ProgramOrderForm[]) => {
  if (orders.length < 1) throw Error("No orders found");

  return orders[0].programId;
};

interface ProgramOrderForm {
  programId: String50;
  bread: Int_0_50;
  produce: Int_0_50;
  produceSelection: "Fruit" | "Vegatable" | "Both";
  meat: Int_0_10;
  meatBreakdown: String150;
  salvage: Int_0_12;
  frozen: Int_0_50;
  snacks: Int_0_50;
}
