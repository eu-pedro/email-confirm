interface Props {
  id: string
  email: string
  username: string
  validation_id: string | null
  checked: Date | null
}

export class User {
  
  private constructor(private readonly props: Props) {}
  
  public static create(email: string, username: string) {
    new User({
      id: crypto.randomUUID().toString(),
      email,
      username,
      checked: new Date(), 
      validation_id: crypto.randomUUID().toString()
    })
  }

  public static with(props: Props){
    return new User(props)
  }

  public get id() {
    return this.props.id
  }

  public get email() {
    return this.props.email
  }

  public get username() {
    return this.props.username
  }

  public get validation_id() {
    return this.props.validation_id
  }

  public get checked() {
    return this.props.checked
  }
}