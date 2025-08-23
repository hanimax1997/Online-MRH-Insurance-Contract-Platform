export class Patterns {
  public static mobile: string = "^0[5-7][0-9]{8}$";
  public static indicatifMobile: string = "^0[5-7][0-9]{8}$";
  public static email: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  public static number: string = "^[0-9]+$";
  public static alphanumerique: string = "^[a-zA-Z0-9_]+$";
  public static string: string = "^[a-zA-ZÀ-ÿ'’\\- ]+$";
  public static nom: string = "^[a-zA-ZÀ-ÿ'’\\- ]{1,50}$";
}