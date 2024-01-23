import type {
  String150,
  String50,
  PhoneNumber,
  Email,
  NC_County,
  Int_0_50,
  Int_0_5,
  Int_0_12,
  PeerGroupSize,
} from "./second-harvest-types";

const orderFoodFromSecondHarvest = (secondHarvestForm: SecondHarvestForm) => {};

interface SecondHarvestForm {
  agencyId: String50;
  agencyName: String150;
  peerGroupSize: PeerGroupSize;
  county: NC_County;
  contactPerson: String50;
  cellPhone: PhoneNumber;
  email: Email;
  appointmentDate: null;
  appointmentTime: Date;
  placingOrder: boolean;
  programId: String50;
  multipleOrders: boolean;
  order1: OrderForm;
  order2: OrderForm;
}

interface OrderForm {
  programId: String50;
  bread: Int_0_50;
  produce: Int_0_50;
  produceSelection: "Fruit" | "Vegatable" | "Both";
  meat: Int_0_5;
  meatBreakdown: String150;
  salvage: Int_0_12;
  frozen: Int_0_50;
  snacks: Int_0_50;
}
