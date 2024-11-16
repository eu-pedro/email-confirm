export interface UseCase<UseCaseRequestProps, UseCaseResponseProps> {
  execute(props: UseCaseRequestProps): Promise<UseCaseResponseProps>
}