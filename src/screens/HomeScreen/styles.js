import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100 * WIDTH_RATIO,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  txtSuccess: {
    marginTop: 30,
    fontSize: 30 * WIDTH_RATIO,
    fontWeight: 'bold',
    color: Colors.white,
  },
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    borderTopLeftRadius: 12 * WIDTH_RATIO,
    borderTopRightRadius: 12 * WIDTH_RATIO,
    paddingHorizontal: 16,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    paddingBottom: 40,
    paddingTop: 12,
    justifyContent: 'space-between',
  },
  btnFooter: {
    flex: 1,
  },
  divider: {
    width: 16 * WIDTH_RATIO,
  },
});

export default styles;
