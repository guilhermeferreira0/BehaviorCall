import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DB1D4',
    padding: 20,
    justifyContent: 'space-between',
  },

  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },

  circleImg: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderColor: '#FFF',
    borderWidth: 18,
  },

  firstContainerTitle: {
    fontWeight: '700',
    marginBottom: 5,
    fontSize: 16,
    color: '#FFF'
  },

  firstContainerLevel: {
    color: '#FFF',
    fontSize: 14,
    // fontFamily: 'Montserrat'
  },

  nextSection: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: 50,
    padding: 10,
    borderRadius: 10,
  },

  nextSectionText: {
    fontWeight: '700',
    fontSize: 22,
    textTransform: 'uppercase',
    color: '#184654',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default styles;