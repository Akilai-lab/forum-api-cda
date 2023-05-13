import { SignupForm } from './Form';

function LoginConnect (){
  return (
    <div style={styles.container}>
      <SignupForm />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 35,
    borderWidth: 1.5,
  },
});
export default LoginConnect;