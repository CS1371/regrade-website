import React from 'react';
import './RegradeList.css';
import { getCards, login } from '../api';
import { formatDate } from '../utils';
import CardComment from '../components/CardComment';
import CardStatus from '../components/CardStatus';
import Card from '../types/Card';

interface RegradeListProps {
  createHandler: () => unknown;
}

interface RegradeListState {
  username: string;
  cards: Card[];
  loading: boolean;
}

class RegradeList extends React.Component<RegradeListProps, RegradeListState> {
  public constructor(props: RegradeListProps) {
    super(props);
    this.state = {
      username: '',
      cards: [],
      loading: true
    };
  }

  public componentDidMount() {
    const result = getCards();
    result.then(data => {
      if (
        data === undefined ||
        data.username === undefined ||
        data.username.length === 0
      ) {
        login();
      } else if (data.cards === undefined) {
        console.error('Invalid json from getCards(): Missing cards field');
      } else {
        this.setState({
          username: data.username,
          cards: data.cards,
          loading: false
        });
      }
    });
  }

  private logoutPrompt = () => {
    if (this.state.loading) return [];
    return (
      <div className="logout-prompt text-right">
        <p>
          Hello <b>{this.state.username}</b>!
        </p>
        <p>
          Not you? <a href="./api/login.php?logout=">Logout</a>
        </p>
      </div>
    );
  };

  private renderCards = () => {
    const { cards, loading } = this.state;
    if (loading) {
      return <h5 className="card-title">Loading...</h5>;
    }
    const { createHandler } = this.props;
    const out: JSX.Element[] = [];
    if (cards.length > 0) {
      for (const card of cards) {
        // Add new lines
        const desc = card.desc.split('\n').map((s, i) => (
          <p className="card-text" key={i}>
            {s}
          </p>
        ));
        out.push(
          <div className="card text-left regrade-card">
            <div className="card-header">
              <div className="row">
                <h5 className="card-title col-md-9 regrade-card-title">
                  {card.name}&nbsp;&nbsp;
                  <small className="card-text">
                    {formatDate(card.dateCreated)}
                  </small>
                </h5>
                <div className="col-md-3 text-right">
                  <CardStatus value={card.status} />
                </div>
              </div>
            </div>
            <div className="card-body">
              {desc}
              <CardComment comments={card.comments} />
            </div>
          </div>
        );
      }
      out.push(<hr />);
      out.push(
        <p className="card-text">
          Would you like to submit another homework regrade request?
        </p>
      );
    } else {
      out.push(<h5 className="card-title">No regrades so far!</h5>);
      out.push(
        <p className="card-text">
          Would you like to submit a homework regrade request?
        </p>
      );
    }
    out.push(
      <button
        type="button"
        className="btn regrade-button"
        onClick={createHandler}
      >
        New Regrade
      </button>
    );
    return out;
  };

  public render() {
    return (
      <div className="RegradeList">
        <div className="row">
          <div className="col-md-9">
            <h2>Regrade Requests</h2>
          </div>
          <div className="col-md-3">{this.logoutPrompt()}</div>
        </div>
        <div className="card text-center regrade-card-container">
          <div className="card-body">{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}

export default RegradeList;
