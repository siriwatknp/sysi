import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    '&:not(:last-of-type)': {
      marginBottom: 8,
    },
  },
  day: {
    marginTop: -6,
    marginBottom: 0,
    color: palette.grey[800],
    letterSpacing: 4,
    fontSize: 40,
  },
  month: {
    color: palette.grey[600],
    marginBottom: 20,
    fontWeight: 'normal',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -8,
  },
  descr: {
    marginTop: -2,
    color: palette.grey[600],
  },
}));

const EventItem = ({ startDate, endDate, title, description }) => {
  const styles = useStyles();
  return (
    <Box
      className={styles.root}
      borderRadius={12}
      border={'1px solid'}
      borderColor={'grey.100'}
      bgcolor={'common.white'}
      p={{ xs: 2, sm: 2.5, md: 3 }}
      pb={{ xs: 0.5, sm: 1, md: 1.5 }}
    >
      <Grid container>
        <Grid item>
          {startDate && (
            <Box display={'flex'} mr={5} minWidth={96}>
              <div>
                <Box display={'flex'} alignItems={'center'}>
                  <h2 className={styles.day}>{startDate.day}</h2>
                  {endDate && (
                    <Box
                      mx={1}
                      mt={-1}
                      height={4}
                      width={20}
                      bgcolor={'grey.300'}
                    />
                  )}
                </Box>
                <h4 className={styles.month}>{startDate.month}</h4>
              </div>
              {endDate && (
                <>
                  <div>
                    <h2 className={styles.day}>{endDate.day}</h2>
                    <h4 className={styles.month}>{endDate.month}</h4>
                  </div>
                </>
              )}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm>
          <div className={styles.title}>{title}</div>
          <div className={styles.descr}>{description}</div>
        </Grid>
      </Grid>
    </Box>
  );
};

EventItem.propTypes = {
  startDate: PropTypes.shape({
    day: PropTypes.node,
    month: PropTypes.string,
  }),
  endDate: PropTypes.shape({ day: PropTypes.node, month: PropTypes.string }),
  title: PropTypes.string,
  description: PropTypes.node,
};

export default EventItem;
