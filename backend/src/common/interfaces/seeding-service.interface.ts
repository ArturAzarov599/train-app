export interface ISeedingService {
  populateDatabase(): Promise<void>;
}
