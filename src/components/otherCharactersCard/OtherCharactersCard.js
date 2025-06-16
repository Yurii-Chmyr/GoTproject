import { useContext, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { getCharacterImage } from '../characterImages/CharacterImages';
import DataContext from '../../services/DataContext';
import './otherCharactersStyle.scss';
import FavoriteButton from '../favButton/FavButton';
import { useFavorites } from '../../services/FavoritesContext';

const OtherCharactersCard = () => {
  const { characters, loading } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(52);
  const [filterType, setFilterType] = useState('all');
  const { isFavoriteCharacter } = useFavorites();

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;

      if (scrollPosition >= threshold) {
        setVisibleCount((prev) => {
          
          const maxCount = filteredCharacters.length;
          if (prev >= maxCount) return prev;
          return prev + 50;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [debouncedSearchTerm, filterType, characters]); 

  const mainCharacters = [
    'Jon Snow', 'Arya Stark', 'Tyrion Lannister', 'Daenerys Targaryen',
    'Brandon Stark', 'Cersei Lannister', 'Jaime Lannister', 'Melisandre',
    'Samwell Tarly', 'Sansa Stark', 'Davos Seaworth', 'Jorah Mormont'
  ];

  if (loading) return <div className="text-center my-5">Loading characters...</div>;

  const otherCharacters = characters.filter(char =>
    char.name && !mainCharacters.includes(char.name) && char.playedBy?.[0]
  );

  const filteredBySearch = debouncedSearchTerm.trim() === ''
    ? otherCharacters
    : otherCharacters.filter(char =>
        char.name.toLowerCase().split(' ').some(word =>
          word === debouncedSearchTerm.toLowerCase()
        )
      );

  const filteredCharacters = (() => {
    switch (filterType) {
      case 'male':
        return filteredBySearch.filter(char => char.gender === 'Male');
      case 'female':
        return filteredBySearch.filter(char => char.gender === 'Female');
      case 'culture':
        return filteredBySearch;
      default:
        return filteredBySearch;
    }
  })();

  const normalizeCulture = (culture) => {
    if (!culture || culture.trim() === '') return 'Undefined';
    return culture
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getGroupedByCulture = (chars) => {
    const grouped = {};
    chars.forEach(char => {
      const normalized = normalizeCulture(char.culture);
      if (!grouped[normalized]) {
        grouped[normalized] = [];
      }
      grouped[normalized].push(char);
    });

    return Object.entries(grouped).sort(([a], [b]) =>
      a === 'Undefined' ? 1 : b === 'Undefined' ? -1 : a.localeCompare(b)
    );
  };

  const groupedCharacters = getGroupedByCulture(filteredCharacters);
  const flatGroupedCharacters = groupedCharacters.flatMap(([_, chars]) => chars);
  const visibleGroupedCharacters = flatGroupedCharacters.slice(0, visibleCount);
  const visibleCharacters = filteredCharacters.slice(0, visibleCount);

  const shouldShowLoadMore = filterType === 'culture'
    ? visibleGroupedCharacters.length < flatGroupedCharacters.length
    : visibleCharacters.length < filteredCharacters.length;

  return (
    <Container className="py-4">
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search characters..."
          className="form-control w-50 mx-auto"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="mb-4 text-center">
        <Button
          variant="dark"
          className={`mx-1 mb-2 ${filterType === 'all' ? 'filter-active' : ''}`}
          onClick={() => setFilterType('all')}
        >
          All
        </Button>
        <Button
          variant="dark"
          className={`mx-1 mb-2 ${filterType === 'male' ? 'filter-active' : ''}`}
          onClick={() => setFilterType('male')}
        >
          Males
        </Button>
        <Button
          variant="dark"
          className={`mx-1 mb-2 ${filterType === 'female' ? 'filter-active' : ''}`}
          onClick={() => setFilterType('female')}
        >
          Females
        </Button>
        <Button
          variant="dark"
          className={`mx-1 mb-2 ${filterType === 'culture' ? 'filter-active' : ''}`}
          onClick={() => setFilterType('culture')}
        >
          Cultures
        </Button>
      </div>

      <div className="character-list-wrapper">
        {filterType === 'culture' ? (
          groupedCharacters.map(([culture, chars], idx) => {
            const visibleChars = visibleGroupedCharacters.filter(c => chars.includes(c));
            return visibleChars.length === 0 ? null : (
              <div key={idx}>
                <div className="section-divider mt-5 mb-5">
                  <span>{culture}</span>
                </div>

                <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
                  {visibleChars.map((char, i) => (
                    <Col key={i} className="d-flex">
                      <Card className="h-100 w-100 d-flex flex-column" style={{ position: 'relative' }}>
                        <FavoriteButton item={{ ...char, image: getCharacterImage(char) }} type="character" />
                        <Card.Img variant="top" src={getCharacterImage(char)} />
                        <Card.Body className="card-body-fixed">
                          <Card.Title>{char.name}</Card.Title>
                          <Card.Text>{char.titles?.[0] || 'No title'}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush mt-auto">
                          <ListGroup.Item>Gender: {char.gender || 'Undefined'}</ListGroup.Item>
                          <ListGroup.Item>Culture: {char.culture || 'Undefined'}</ListGroup.Item>
                          <ListGroup.Item>Actor: {char.playedBy?.[0] || 'Undefined'}</ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            );
          })
        ) : (
          <Row xs={2} sm={2} md={3} lg={4} className="g-4 align-items-stretch">
            {visibleCharacters.length > 0 ? (
              visibleCharacters.map((char, idx) => (
                <Col key={idx} className="d-flex">
                  <Card className="h-100 w-100 d-flex flex-column" style={{ position: 'relative' }}>
                    <FavoriteButton item={{ ...char, image: getCharacterImage(char) }} type="character" />
                    <Card.Img variant="top" src={getCharacterImage(char)} />
                    <Card.Body className="card-body-fixed">
                      <Card.Title>{char.name}</Card.Title>
                      <Card.Text>{char.titles?.[0] || 'No title'}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush mt-auto">
                      <ListGroup.Item>Gender: {char.gender || 'Undefined'}</ListGroup.Item>
                      <ListGroup.Item>Culture: {char.culture || 'Undefined'}</ListGroup.Item>
                      <ListGroup.Item>Actor: {char.playedBy?.[0] || 'Undefined'}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="w-100 text-center py-5">
                <h5>No characters found</h5>
              </div>
            )}
          </Row>
        )}
      </div>

      
      {/* {shouldShowLoadMore && (
        <div className="text-center mt-4">
          <Button variant="dark" onClick={() => setVisibleCount(prev => prev + 50)}>Load more</Button>
        </div>
      )} */}
    </Container>
  );
};

export default OtherCharactersCard;