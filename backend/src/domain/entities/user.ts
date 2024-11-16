interface Props {
  id: string
  email: string
  username: string
}

export class User {
  
  private constructor(private readonly props: Props) {}
  
  public static create(email: string, username: string) {
    new User({
      id: crypto.randomUUID().toString(),
      email,
      username
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
}