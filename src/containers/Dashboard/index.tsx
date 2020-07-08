import React, { useEffect, useState } from 'react';
import { Card, Statistic, Row, Col, Input, Skeleton, Table, List } from 'antd';
import useFetchData from '@/config/services/fetchData';
import SPCard from '@/components/SPCard';
import { POKEMON_SEARCH } from '@/config/services/api';

interface ResultTypes {
  data: object,
  loading: boolean
};

interface Pokemon {
  pokeName?: string,
  ability: object,
  type: object,
  stat: object
};

const resultsRender = ({ data, loading } : ResultTypes, pokeName : Pokemon) => {
  if (loading) {
    return <Skeleton active />;
  } else if (!data && pokeName) {
    return <p>Result not found!</p>;
  } else if (data && !loading) {
    const abilitiesColumns = [
      {
        title: 'Ability Name',
        dataIndex: 'ability',
        key: 'abilityName',
        render: (ability : Pokemon) => ability.name
      }
    ];

    const typesColumns = [
      {
        title: 'Type Name',
        dataIndex: 'type',
        key: 'typeName',
        render: (type : Pokemon) => type.name
      }
    ];

    const statsColumns = [
      {
        title: 'Stat Name',
        dataIndex: 'stat',
        key: 'abilityName',
        render: (stat : Pokemon) => stat.name
      },
      {
        title: 'Base Stat',
        dataIndex: 'base_stat',
        key: 'baseStat'
      }
    ];

    const pokemonDetail = [
      {
        title: 'Name',
        value: data.name
      },
      {
        title: 'Weight',
        value: data.weight
      },
      {
        title: 'Height',
        value: data.height
      },
      {
        title: 'Base Experience',
        value: data.base_experience
      }
    ];

    return (
      <div className="Pokemon-Results">
        <Row gutter={30}>
          <Col span={24}>
            <Row gutter={30} align="middle">
              <Col flex={1}>
                <img src={data.sprites.front_default} title={data.name} />
              </Col>
              <Col flex={8}>
                <List
                  size="large"
                  bordered
                  dataSource={pokemonDetail}
                  renderItem={item => <List.Item><b>{item.title}: </b>{item.value + ''}</List.Item>}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mb-30" />
        <Row gutter={30}>
          <Col span={8}>
            <h3>Abilities</h3>
            <Table dataSource={data.abilities} columns={abilitiesColumns} pagination={false} />
          </Col>
          <Col span={8}>
            <h3>Types</h3>
            <Table dataSource={data.types} columns={typesColumns} pagination={false} />
          </Col>
          <Col span={8}>
            <h3>Stats</h3>
            <Table dataSource={data.stats} columns={statsColumns} pagination={false} />
          </Col>
        </Row>
      </div>
    )
  }
};

const Dashboard = () => {
  const { Search } = Input;

  const [pokeName, setPokeName] = useState(null);

  const [pokemon, getPokemon] = useFetchData({
    url: POKEMON_SEARCH().THIS
  });

  const [pokemonHabitats, getPokemonHabitats] = useFetchData({
    url: POKEMON_SEARCH().HABITAT
  });

  const [searchedPokemon, getSearchedPokemon] = useFetchData({
    url: POKEMON_SEARCH(pokeName).SEARCH
  })

  useEffect(() => {
    getPokemon();
    getPokemonHabitats();
  }, []);

  useEffect(() => {
    if (pokeName) {
      getSearchedPokemon();
    }
  }, [pokeName]);

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Row gutter={30}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Page Count"
              value={2}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="User Count"
              value={1}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Pokémon Habitat Count"
              value={pokemonHabitats.data ? pokemonHabitats.data.count : 0}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Pokémon Count"
              value={pokemon.data ? pokemon.data.count : 0}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={30}>
        <Col span={24}>
          <SPCard heading="Pokémon Search">
            <Search
              size="large"
              placeholder="Search Pokémon"
              onSearch={name => setPokeName(name)}
              style={{ width: 200 }}
            />
            <div className="mb-10" />
            <i>ps. charizard, bulbasaur, pikachu, pidgeotto</i>
            <div className="mb-30" />

            {resultsRender(searchedPokemon, pokeName)}
          </SPCard>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;