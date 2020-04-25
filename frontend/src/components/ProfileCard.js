import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    width: '50%',
    margin: '0 auto',
    marginTop: 10
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

const ProfileCard = (props) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });

  let profile = props.profile;

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
                {
                profile.profilePicture 
                    ? <Avatar className={styles.avatar} src={profile.profilePicture} />
                    : <Avatar className={styles.avatar} src="nopic.png" />
                }
        <h3 className={styles.heading}>{profile.name}</h3>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Commits</p>
          <p className={styles.statValue}><a href={profile.githubProfile}>21</a></p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>GitHub Followers</p>
          <p className={styles.statValue}><a href={profile.githubProfile}>12</a></p>
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard;