import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  invoiceId: string;
}
