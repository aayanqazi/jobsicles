import React, { Component } from 'react';
import { TouchableOpacity, Modal, Image, ScrollView } from 'react-native';
import { View, Text, Content, Icon, Right, Body } from 'native-base';
import Button from './common/Button';
import { Ionicons, Feather } from "@expo/vector-icons"
import { Actions } from "react-native-router-flux";

export default class Filter extends Component {
  state = {
    change: {
      most: false,
      expiring: false,
      "2000-3000": false,
      "3001-5000": false,
      "5001-7000": false,
      "7001-8000": false,
      "8001-10000": false,
      "10001-12000": false,
      "12001-14000": false,
      "14001-16000": false,
      "16000+": false,
      "not-stated": false,
      "Negotiable": false,
      "3D Modeling": false,
      "Accounting": false,
      "Admin & Clerical": false,
      "Airline": false,
      "Architecture": false,
      "Automotive": false,
      "Banking": false,
      "Beauty": false,
      "Broadcast": false,
      "Journalism": false,
      "Business Development": false,
      "Clearance": false,
      "Construction": false,
      "Consultant": false,
      "Customer Service": false,
      "Designer": false,
      "Developer": false,
      "Distribution": false,
      "Education  Teaching": false,
      "Electrician": false,
      "Engineering": false,
      "Executive": false,
      "Finance": false,
      "Food & Beverages": false,
      "Front Office": false,
      "General Business": false,
      "General Labor": false,
      "Government": false,
      "Graphics": false,
      "Health Care": false,
      "Housekeeping": false,
      "Human Resource": false,
      "Information Technology": false,
      "Installation  Maint  Repair": false,
      "Insurance": false,
      "International": false,
      "Inventory": false,
      "Journalism": false,
      "Legal": false,
      "Logistics": false,
      "Management": false,
      "Manufacturing": false,
      "Marine": false,
      "Marketing": false,
      "Nonprofit  Social Services": false,
      "Operations": false,
      "Others": false,
      "Photography": false,
      "Presenter": false,
      "Printing": false,
      "Procurement": false,
      "Producer": false,
      "Professional Services": false,
      "Projects": false,
      "Public Relations": false,
      "Purchasing": false,
      "QA  Quality Control": false,
      "Real Estate": false,
      "Research": false,
      "Reservations": false,
      "Resort and Hospitality": false,
      "Restaurant  Food Service": false,
      "Retail": false,
      "Sales": false,
      "Security": false,
      "Spa": false,
      "Supervision": false,
      "Technical": false,
      "Telecommunications": false,
      "Training": false,
      "Transportation": false,
      "Travel & Tour": false,
      "Tutor": false,
      "Water Sports": false,
    },
    page: 'main'

  }

  onActive = (value) => {
    var defaults = {
      most: false,
      expiring: false,
      "2000-3000": false,
      "3001-5000": false,
      "5001-7000": false,
      "7001-8000": false,
      "8001-10000": false,
      "10001-12000": false,
      "12001-14000": false,
      "14001-16000": false,
      "16000+": false,
      "not-stated": false,
      "Negotiable": false,
      "3D Modeling": false,
      "Accounting": false,
      "Admin & Clerical": false,
      "Airline": false,
      "Architecture": false,
      "Automotive": false,
      "Banking": false,
      "Beauty": false,
      "Broadcast": false,
      "Journalism": false,
      "Business Development": false,
      "Clearance": false,
      "Construction": false,
      "Consultant": false,
      "Customer Service": false,
      "Designer": false,
      "Developer": false,
      "Distribution": false,
      "Education  Teaching": false,
      "Electrician": false,
      "Engineering": false,
      "Executive": false,
      "Finance": false,
      "Food & Beverages": false,
      "Front Office": false,
      "General Business": false,
      "General Labor": false,
      "Government": false,
      "Graphics": false,
      "Health Care": false,
      "Housekeeping": false,
      "Human Resource": false,
      "Information Technology": false,
      "Installation  Maint  Repair": false,
      "Insurance": false,
      "International": false,
      "Inventory": false,
      "Journalism": false,
      "Legal": false,
      "Logistics": false,
      "Management": false,
      "Manufacturing": false,
      "Marine": false,
      "Marketing": false,
      "Nonprofit  Social Services": false,
      "Operations": false,
      "Others": false,
      "Photography": false,
      "Presenter": false,
      "Printing": false,
      "Procurement": false,
      "Producer": false,
      "Professional Services": false,
      "Projects": false,
      "Public Relations": false,
      "Purchasing": false,
      "QA  Quality Control": false,
      "Real Estate": false,
      "Research": false,
      "Reservations": false,
      "Resort and Hospitality": false,
      "Restaurant  Food Service": false,
      "Retail": false,
      "Sales": false,
      "Security": false,
      "Spa": false,
      "Supervision": false,
      "Technical": false,
      "Telecommunications": false,
      "Training": false,
      "Transportation": false,
      "Travel & Tour": false,
      "Tutor": false,
      "Water Sports": false,
    }

    defaults[value] = true
    this.setState({
      change: defaults
    })
  }

  _renderList = (value, ind) => {
    return (
      <TouchableOpacity key={ind} onPress={() => this.onActive(value)} style={
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 13,
          paddingRight: 8,
          width: '100%',
          borderBottomColor: '#eaeaea',
          borderBottomWidth: 1,
          height: 40,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}>
        <Text style={styles.subtitle}>{value === "not-stated" || value === "Negotiable" ? null : "MVR "}{value}</Text>
        {this.state.change[value] ? <Feather name="check" size={24} color="#00bbb1" /> : null}
      </TouchableOpacity>
    )
  }
  _renderListCategory = (value, ind) => {
    return (
      <TouchableOpacity key={ind} onPress={() => this.onActive(value)} style={
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 13,
          paddingRight: 8,
          width: '100%',
          borderBottomColor: '#eaeaea',
          borderBottomWidth: 1,
          height: 40,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}>
        <Text style={styles.subtitle}>{value}</Text>
        {this.state.change[value] ? <Feather name="check" size={24} color="#00bbb1" /> : null}
      </TouchableOpacity>
    )
  }
  _renderLocation = () => {
    var arr = [
      "2000-3000",
      "3001-5000",
      "5001-7000",
      "7001-8000",
      "8001-10000",
      "10001-12000",
      "12001-14000",
      "14001-16000",
      "16000+",
      "not-stated",
      "Negotiable",
    ]
    return (
      <View style={styles.modalStyles}>
        <View style={
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00bbb1',
            width: '100%',
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.title}>Salary</Text>
        </View>
        <ScrollView automaticallyAdjustContentInsets={true} style={{ width: '100%', minHeight: 200 }}>
          {arr.map((data, index) => this._renderList(data, index))}</ScrollView>
        <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginRight: 10 }}>
            <Button onPress={() => this.applyNow('salary')} radius={20} buttonText="Apply" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
          <View>
            <Button onPress={() => this.setState({
              most: true,
              page: 'main'
            })} radius={20} buttonText="Back" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
        </View>
      </View>
    )
  }

  _renderCategory = () => {
    var arr = [
      "3D Modeling",
      "Accounting",
      "Admin & Clerical",
      "Airline",
      "Architecture",
      "Automotive",
      "Banking",
      "Beauty",
      "Broadcast",
      "Journalism",
      "Business Development",
      "Clearance",
      "Construction",
      "Consultant",
      "Customer Service",
      "Designer",
      "Developer",
      "Distribution",
      "Education  Teaching",
      "Electrician",
      "Engineering",
      "Executive",
      "Finance",
      "Food & Beverages",
      "Front Office",
      "General Business",
      "General Labor",
      "Government",
      "Graphics",
      "Health Care",
      "Housekeeping",
      "Human Resource",
      "Information Technology",
      "Installation  Maint  Repair",
      "Insurance",
      "International",
      "Inventory",
      "Journalism",
      "Legal",
      "Logistics",
      "Management",
      "Manufacturing",
      "Marine",
      "Marketing",
      "Nonprofit  Social Services",
      "Operations",
      "Others",
      "Photography",
      "Presenter",
      "Printing",
      "Procurement",
      "Producer",
      "Professional Services",
      "Projects",
      "Public Relations",
      "Purchasing",
      "QA  Quality Control",
      "Real Estate",
      "Research",
      "Reservations",
      "Resort and Hospitality",
      "Restaurant  Food Service",
      "Retail",
      "Sales",
      "Security",
      "Spa",
      "Supervision",
      "Technical",
      "Telecommunications",
      "Training",
      "Transportation",
      "Travel & Tour",
      "Tutor",
      "Water Sports"
    ]
    return (
      <View style={styles.modalStyles}>
        <View style={
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00bbb1',
            width: '100%',
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.title}>Category</Text>
        </View>
        <ScrollView automaticallyAdjustContentInsets={true} style={{ width: '100%', minHeight: 200 }}>
          {arr.map((data, index) => this._renderListCategory(data, index))}</ScrollView>
        <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginRight: 10 }}>
            <Button onPress={() => this.applyNow('catagory')} radius={20} buttonText="Apply" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
          <View>
            <Button onPress={() => this.setState({
              most: true,
              page: 'main'
            })} radius={20} buttonText="Back" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
        </View>
      </View>
    )
  }

  _renderMain = () => {
    return (
      <View style={styles.modalStyles}>
        <View style={
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00bbb1',
            width: '100%',
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.title}>Job Filters</Text>
        </View>
        <TouchableOpacity onPress={() => this.onActive('most')} style={
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 13,
            paddingRight: 8,
            width: '100%',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.subtitle}>Most Recent</Text>
          {this.state.change.most ? <Feather name="check" size={24} color="#00bbb1" /> : null}

        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onActive('expiring')} style={
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 13,
            paddingRight: 8,
            width: '100%',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.subtitle}>Expiring Soon</Text>
          {this.state.change.expiring ? <Feather name="check" size={24} color="#00bbb1" /> : null}
        </TouchableOpacity>
        <TouchableOpacity style={
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 13,
            paddingRight: 13,
            width: '100%',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.subtitle}>Location</Text>
          <Ionicons name="ios-arrow-forward-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ page: 'category' })} style={
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 13,
            paddingRight: 13,
            width: '100%',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.subtitle}>Category</Text>
          <Ionicons name="ios-arrow-forward-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ page: 'salary' })} style={
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 13,
            paddingRight: 13,
            width: '100%',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
            height: 40,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}>
          <Text style={styles.subtitle}>Salary Range</Text>
          <Ionicons name="ios-arrow-forward-outline" size={25} />
        </TouchableOpacity>

        <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginRight: 10 }}>
            <Button onPress={() => this.applyNow('main')} radius={20} buttonText="Apply" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
          <View>
            <Button onPress={this.props.change} radius={20} buttonText="Reset" color="#fff" bgColor="#00bbb1" width={80} />
          </View>
        </View>
      </View>
    )
  }

  applyNow = (value) => {
    var select = this.state.change;
    var result;
    for (var i in select) {
      if (select[i] === true) {
        result = i;
        break;
      }
    }
    switch (value) {
      case 'main':
        switch (result) {
          case 'most':
            fetch('https://jobsicle.mv/api.php?action=get_jobs_by_filters&tokenID=123&closing_date=true')
              .then(res => res.json())
              .then(data => {
                this.props.change();
                Actions.push('search', { data: data })
              })
              .catch(err => console.log(err))
            break;
          case 'expiring':
            fetch('https://jobsicle.mv/api.php?action=get_jobs_by_filters&tokenID=123')
              .then(res => res.json())
              .then(data => {
                this.props.change();
                Actions.push('search', { data: data })
              })
              .catch(err => console.log(err))
            break;
        }
        break;
      case 'salary':
        fetch(`https://jobsicle.mv/api.php?action=get_jobs_by_filters&tokenID=123&salary_range=${result}`)
          .then(res => res.json())
          .then(data => {
            this.props.change();
            Actions.push('search', { data: data })
          })
          .catch(err => console.log(err))
        break;
      case 'catagory':
        fetch(`https://jobsicle.mv/api.php?action=get_jobs_by_filters&tokenID=123&jobcategory=${result}`)
          .then(res => res.json())
          .then(data => {
            this.props.change();
            Actions.push('search', { data: data })
          })
          .catch(err => console.log(err))

        break;
      default:
        alert('please select any option')
        break;
    }
  }

  _renderRow = (value) => {
    switch (value) {
      case 'main':
        return this._renderMain();
        break;
      case 'salary':
        return this._renderLocation();
        break;
      case 'category':
        return this._renderCategory();
        break;
      default:
        return 0;
        break;
    }
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.change}
      >
        {this._renderRow(this.state.page)}
      </Modal >
    )
  }
}

const styles = {
  icon: {
    width: 40,
    height: 40,
    marginVertical: 20
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "calibre",
    alignSelf: "center",
  },
  title: {
    fontSize: 26,
    fontFamily: "calibre",
    alignSelf: "center",
    color: 'white',
  },
  modalStyles: {
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: .7,
    borderColor: "#9d9d9c",
    marginTop: "50%",
    maxHeight: 320
  },
}
